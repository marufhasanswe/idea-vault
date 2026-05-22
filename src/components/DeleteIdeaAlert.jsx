"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const DeleteIdeaAlert = ({ idea }) => {
  const id = idea._id;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/my-ideas/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.deletedCount > 0) {
      toast.success("Successfully idea deleted!");
      redirect("/my-ideas");
    }
    console.log(data);
  };
  return (
    <AlertDialog>
      <Button className="rounded-xl bg-red-500/10 px-4 py-1.5 text-sm text-red-500 hover:bg-red-500/20">
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-muted-foreground">
                This will permanently delete <strong>{idea.ideaTitle}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteIdeaAlert;
