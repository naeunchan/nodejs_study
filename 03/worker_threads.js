const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);

  // 이벤트 리스너처럼 .on
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
