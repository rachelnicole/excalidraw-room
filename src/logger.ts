// tracer.ts
import tracer from 'dd-trace';
tracer.init({
    env: 'prod',
    service: 'excalidraw-room',
    clientToken: "",
    // @ts-ignore
    datacenter: "eu",
    forwardErrorsToLogs: true,
    sampleRate: 100,
}); // initialized in a different file to avoid hoisting.
export default tracer;