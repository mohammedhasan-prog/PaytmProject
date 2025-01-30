"use client";

interface NavbarProps { 
  onSignIn: () => void;
  onSignOut: () => void;
  data: any;
}
export const navbar = ({
  data,
  onSignIn,
  onSignOut,
}:NavbarProps) => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
        <div className="flex justify-between h-16 items-center w-full">
          {/* Logo on the left */}
          <div className="flex items-center">
            <span className=" ml-4 text-2xl font-bold text-gray-800">
              <strong>Paytm</strong>
            </span>
          </div>

          {/* Login button on the right */}
          <div className="flex items-center ml-auto">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
              { data ? (
                <span onClick={onSignOut}>Logout</span>
              ) : (
                <span onClick={onSignIn}>Sign in</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};