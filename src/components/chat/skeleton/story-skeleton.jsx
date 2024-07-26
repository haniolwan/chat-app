import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const StoriesSkeleton = () => {
  return (
    <div className="text-start p-6 border-t border-gray-700">
      <div>
        <p className="text-xl font-medium">
          {/* <Skeleton width={70} /> */}
          Stories
        </p>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white cursor-pointer">
            <FontAwesomeIcon className="text-[#26272D]" icon={faPlus} />
          </div>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} circle={true} height={48} width={48} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoriesSkeleton
