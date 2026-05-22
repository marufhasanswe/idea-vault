import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import ProfileToast from "@/components/ProfileToast";
import Link from "next/link";

const ProfilePage = async ({ searchParams }) => {
  const sParams = await searchParams;
  const success = sParams?.success;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // UPDATE PROFILE
  const handleUpdateProfile = async (formData) => {
    "use server";

    // ACCESS FORMDATA
    const updatedProfile = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("photoURL"),
      bio: formData.get("bio"),
    };

    const { token } = await auth.api.getToken({
      headers: await headers(),
    });
    const res = await fetch(`http://localhost:5000/users/${user?.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedProfile),
    });

    const data = await res.json();

    console.log(data.success);
    if (data.success === true) {
      redirect("/profile?success=true");
    }
  };

  return (
    <>
      <ProfileToast success={success} />
      <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Profile Settings</h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage your personal information and public profile
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative h-40 bg-gradient-to-r from-primary/20 via-cyan-500/10 to-primary/10">
              <div className="absolute -bottom-14 left-6">
                <Image
                  height={100}
                  width={100}
                  src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt={user?.name}
                  className="h-28 w-28 rounded-3xl border-4 border-background object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="px-6 pb-6 pt-20 md:px-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold">{user?.name}</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {user?.email}
                </p>
              </div>

              <form action={handleUpdateProfile} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <TextField name="name" defaultValue={user?.name} isRequired>
                    <Label className="mb-2 text-sm font-medium">
                      Full Name
                    </Label>

                    <Input
                      placeholder="Enter your name"
                      className="input-style h-12 rounded-2xl"
                    />

                    <FieldError />
                  </TextField>

                  <TextField name="email" defaultValue={user?.email} isReadOnly>
                    <Label className="mb-2 text-sm font-medium">
                      Email Address
                    </Label>

                    <Input
                      placeholder="Email"
                      className="input-style h-12 rounded-2xl opacity-70"
                    />

                    <FieldError />
                  </TextField>

                  <div className="md:col-span-2">
                    <TextField name="photoURL" defaultValue={user?.image}>
                      <Label className="mb-2 text-sm font-medium">
                        Profile Photo URL
                      </Label>

                      <Input
                        placeholder="https://example.com/photo.jpg"
                        className="input-style h-12 rounded-2xl"
                      />

                      <FieldError />
                    </TextField>
                  </div>

                  <div className="md:col-span-2">
                    <TextField name="bio">
                      <Label className="mb-2 text-sm font-medium">Bio</Label>

                      <TextArea
                        placeholder="Tell people about yourself..."
                        className="input-style rounded-3xl"
                      />

                      <FieldError />
                    </TextField>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Link href={"/"}>
                    <Button
                      type="button"
                      className="h-11 rounded-2xl border border-border bg-background px-6 text-foreground hover:bg-muted"
                    >
                      Cancel
                    </Button>
                  </Link>

                  <Button
                    type="submit"
                    className="h-11 rounded-2xl bg-[#4BB8FA] px-6 text-primary-foreground hover:opacity-90"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
