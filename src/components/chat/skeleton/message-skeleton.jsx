const SkeletonMessage = ({ alignRight }) => (
  <div className={`${alignRight ? "float-end" : "float-start"} my-4 py-2`}>
    <div className="space-y-2 mb-4 animate-pulse">
      <div
        className={`bg-gray-700 h-6 w-1/2 rounded ${
          alignRight ? "float-end" : "float-start"
        }`}></div>{" "}
      {/* Simulate the message content */}
      <div
        className={`bg-gray-700 h-4 w-1/12 rounded ${
          alignRight ? "float-start" : "float-end"
        }`}></div>{" "}
      {/* Simulate the time */}
    </div>
  </div>
)

export default SkeletonMessage
