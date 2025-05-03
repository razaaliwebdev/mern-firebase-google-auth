import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/get-user", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Unauthorized");
      const data = await response.json();
      setUserData(data.user);
    } catch (err) {
      setError(err.message || "Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">
                Dashboard
              </h1>
              <p className="text-gray-500 mt-2">
                Welcome to your personalized space
              </p>
            </div>
            {userData?.avatar && (
              <img
                src={userData.avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
            )}
          </div>

          {/* Content Section */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="animate-spin h-12 w-12 border-4 border-purple-500 rounded-full border-t-transparent"></div>
              <span className="text-gray-600 font-medium">
                Loading your profile...
              </span>
            </div>
          ) : error ? (
            <div className="bg-red-100/90 backdrop-blur-sm p-6 rounded-xl border border-red-200 flex items-center space-x-4">
              <div className="bg-red-500 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-red-600 font-semibold text-lg">
                  Oops! Something went wrong
                </h3>
                <p className="text-red-500">{error}</p>
              </div>
            </div>
          ) : userData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
                <div className="flex items-center space-x-4">
                  {userData.avatar && (
                    <img
                      src={userData.avatar}
                      alt="Profile"
                      className="w-20 h-20 rounded-full border-4 border-white/20"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-bold">
                      {userData.name || userData.email}
                    </h2>
                    <p className="text-purple-100">{userData.email}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {userData.phoneNumber && (
                    <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{userData.phoneNumber}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Total Orders
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Active Projects
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Messages
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Notifications
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No user data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
