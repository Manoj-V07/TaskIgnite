import Logo from "../../assets/logo.jpg";

export const Card = () => {
  const profileData = {
    id: "24CS131",
    name: "Manoj VinayagaMoorthi",
    address: "Pollachi",
    contact: "8925149206",
    email: "manoj.v2024cse@sece.ac.in",
    password: "*********",
    profileImage: Logo,
  };

  return (
    <div className="w-[1000px] h-[500px] mx-auto mt-10 rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 text-gray-900 dark:text-white relative">
      <div className="p-6">
        <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 h-40 flex items-center pl-6 pr-56 relative">
          <h2 className="text-2xl font-semibold text-white">Your Profile</h2>
          <div className="absolute -bottom-16 right-10 w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-md">
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 pl-6 pr-40 py-6 space-y-3 text-left">
        <p>
          <span className="font-semibold">Admin id:</span> {profileData.id}
        </p>
        <p>
          <span className="font-semibold">Name:</span> {profileData.name}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {profileData.address}
        </p>
        <p>
          <span className="font-semibold">Contact No.:</span> {profileData.contact}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {profileData.email}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {profileData.password}
        </p>
      </div>

      {/* Edit button moved to the right */}
      <div className="absolute bottom-6 right-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md">
          Edit
        </button>
      </div>
    </div>
  );
};