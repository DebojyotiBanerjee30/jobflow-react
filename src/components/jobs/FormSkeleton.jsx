import Skeleton from "react-loading-skeleton";

const FormSkeleton = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8">
              <Skeleton width={220} height={36} />

              <Skeleton width={320} height={20} />
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>

                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>

                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>

                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>

                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>

                <div>
                  <Skeleton width={80} height={18} />

                  <div className="mt-2">
                    <Skeleton height={42} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-end gap-4">
                  <Skeleton width={90} height={40} />

                  <Skeleton width={90} height={40} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSkeleton;
