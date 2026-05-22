"use client";

import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ProfileToast = ({ success }) => {
  const toastShown = useRef(false);

  useEffect(() => {
    if (success === "true" && !toastShown.current) {
      toast.success("Profile updated successfully!");

      toastShown.current = true;
    }
  }, [success]);

  return null;
};

export default ProfileToast;
