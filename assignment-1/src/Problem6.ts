{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }

  const myProfile: Profile = {
    name: "Usama",
    age: 2,
    email: "usama@gmail.com",
  };

  const updates = {
    name: "Hasan",
    email: "hasan@gmail.com",
  };

  const profileUpdated = updateProfile(myProfile, updates);
  console.log(profileUpdated);
  //
}
