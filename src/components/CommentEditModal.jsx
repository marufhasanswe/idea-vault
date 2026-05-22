"use client";
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

const CommentEditModal = ({ comment }) => {
  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedComment = e.target.comment.value;
    const res = await fetch(`http://localhost:5000/comment/${comment?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment: updatedComment }),
    });
    const data = await res.json();
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
                    <button
                      type="submit"
                      className="rounded-2xl bg-[#4BB8FA] px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                    >
                      Update Comment
                    </button>
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
