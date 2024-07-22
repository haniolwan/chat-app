import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const UserSkeleton = () => {
  return (
    <div className="flex py-2 px-6 hover:bg-gray-900">
      <Skeleton circle={true} height={40} width={40} />
      <div className="grid w-full ml-2">
        <div className="flex justify-between items-center">
          <Skeleton width={100} height={20} />
          <Skeleton width={50} height={15} />
        </div>
        <span className="text-sm">
          <div className="flex space-x-1">
            <Skeleton width={200} height={15} />
          </div>
        </span>
      </div>
    </div>
  )
}

export default UserSkeleton
