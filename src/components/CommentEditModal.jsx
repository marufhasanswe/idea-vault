"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const CommentEditModal = ({ comment, onDelete }) => {
  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedComment = e.target.comment.value;
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${comment?._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify({ comment: updatedComment }),
      },
    );
    const data = await res.json();
    if (data?.modifiedCount > 0) {
      toast.success("Successfully comment edited!");
      window.location.reload();
    }
    console.log(data);
  };

  return (
    <Modal>
      <Button variant="none" className="text-primary hover:underline p-0 m-0">
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form onSubmit={handleEdit} className="space-y-3">
                  <TextField
                    defaultValue={comment?.comment}
                    name="comment"
                    isRequired
                  >
                    <Label className="mb-2 text-sm font-medium">
                      Edit Comment
                    </Label>

                    <TextArea
                      placeholder="Write your comment..."
                      className="input-style rounded-xl shadow-sm placeholder:text-muted-foreground text-foreground border"
                    />

                    <FieldError />
                  </TextField>

                  <div className="flex justify-end">
                    <Button
                      slot={"close"}
                      type="submit"
                      className="rounded-2xl bg-[#4BB8FA] px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                    >
                      Update Comment
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CommentEditModal;
