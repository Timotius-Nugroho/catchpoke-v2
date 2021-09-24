import React from "react";

const DetailLoader: React.FC = () => {

  return(
    <div className="animate-pulse bg-card shadow-yellow rounded-md p-3 w-full">
      <div className="flex-1 space-y-3 py-1">
        <div className="h-4 bg-yellow-500 rounded w-4/5"></div>
        <div className="space-y-1">
          <div className="h-2 bg-yellow-500 rounded w-3/4 ml-4"></div>
          <div className="h-2 bg-yellow-500 rounded"></div>
          <div className="h-2 bg-yellow-500 rounded w-5/6 ml-4"></div>
          <div className="h-2 bg-yellow-500 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )

}

export default DetailLoader