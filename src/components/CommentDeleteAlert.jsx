"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const CommentDeleteAlert = ({ comment, onDelete }) => {
  const id = comment?._id;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/comment/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.deletedCount > 0) {
      toast.success("Successfully comment deleted!");
      onDelete(id);
    }
    console.log(data);
  };
  return (
    <AlertDialog>
      <Button variant="none" className="text-red-500 hover:underline">
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
                This will permanently delete <strong>{comment?.comment}</strong>{" "}
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

export default CommentDeleteAlert;
