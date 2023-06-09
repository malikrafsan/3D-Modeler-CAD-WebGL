const bufferSetup = (contextGL: ContextGL) => {
  const gl = contextGL.gl;
  const shaderProgram = contextGL.program;

  const vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    throw new Error("Vertex buffer not created");
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(globalVars.vertices),
    gl.STATIC_DRAW
  );

  const colorBuffer = gl.createBuffer();
  if (!colorBuffer) {
    throw new Error("Color buffer not created");
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(globalVars.colors),
    gl.STATIC_DRAW
  );

  const normalBuffer = gl.createBuffer();
  if (!normalBuffer) {
    throw new Error("Normal buffer not created");
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(globalVars.normals),
    gl.STATIC_DRAW
  );

  contextGL.initMatrix();

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  const position = gl.getAttribLocation(shaderProgram, "position");
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);

  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  const color = gl.getAttribLocation(shaderProgram, "color");
  gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(color);

  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  const normal = gl.getAttribLocation(shaderProgram, "normal");
  gl.vertexAttribPointer(normal, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(normal);

  gl.useProgram(shaderProgram);

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.depthFunc(gl.LEQUAL);

  contextGL.clear();
};

const modelSetup = async (filepath: string) => {
  const res = await fetch(filepath);
  if (!res.ok) {
    throw new Error("File not found");
  }

  const data = await res.json();
  const models = parseModelsData(data);

  console.log(models);
  return models;
};

const verticesSetup = (models: Model[]) => {
  globalVars.vertices = [];
  globalVars.colors = [];
  globalVars.normals = [];

  for (const model of models) {
    globalVars.vertices.push(...model.vertices);
    globalVars.colors.push(...model.color);
    // globalVars.normals.push(...model.normals);
  }

  const normals: number[] = [];

  for (let i = 0; i < globalVars.vertices.length; i += 4 * 3) {
    const arr3: number[][] = [];
    for (let j = 0; j < 12; j += 3) {
      arr3.push(globalVars.vertices.slice(i + j, i + j + 3));
    }

    for (let j = 0; j < 4; j++) {
      const left = j === 0 ? 3 : j - 1;
      const right = j === 3 ? 0 : j + 1;

      const vecA = calcVector(arr3[left], arr3[j]);
      const vecB = calcVector(arr3[right], arr3[j]);

      const vecC = normalize(crossProductVector(vecA, vecB));
      normals.push(...vecC);
    }

    // const vecA = calcVector(arr3[2], arr3[0]);
    // const vecB = calcVector(arr3[3], arr3[1]);

    // const vecC = normalize(crossProductVector(vecA, vecB));
    // normals.push(...vecC, ...vecC, ...vecC, ...vecC);
  }
  console.log(normals);

  globalVars.normals = normals;
};

const helpSetup = async (filepath: string, elmtContainer: ElmtContainer) => {
  const res = await fetch(filepath);
  if (!res.ok) {
    throw new Error("File not found");
  }

  const data: IHelpConfig[] = await res.json();
  const elmts = data.map((elmt, idx) => {
    const title = document.createElement("h3");
    title.textContent = idx + 1 + ". " + elmt.title;
    const descs = elmt.description.map((desc) => {
      const p = document.createElement("p");
      p.classList.add("help-desc");
      p.textContent = desc;
      return p;
    });

    const container = document.createElement("div");
    container.classList.add("help-container");
    container.appendChild(title);
    descs.forEach((desc) => container.appendChild(desc));

    return container;
  });

  elmtContainer.modalBody.append(...elmts);
};

const sceneSetup = (models: Model[]) => {
  globalVars.models = models;
};

const selectedSetup = (elmtContainer: ElmtContainer) => {
  const selectedShape = elmtContainer.selectShape.value;
  updateSelected(selectedShape);
};
