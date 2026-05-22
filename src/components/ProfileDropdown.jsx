import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
const ProfileDropdown = ({ user }) => {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt={user?.name}
            src={user?.image}
          />
          <Avatar.Fallback delayMs={600}>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback delayMs={600}>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Link href={"/"}>
              <Label>Dashboard</Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Link href={"/profile"}>
              <Label>Profile</Label>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ProfileDropdown;
