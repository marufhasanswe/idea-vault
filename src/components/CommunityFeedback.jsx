"use client";
import { authClient } from "@/lib/auth-client";
import { FieldError, Form, Label, TextArea, TextField } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CommentCard from "./CommentCard";

const CommunityFeedback = ({ ideaId }) => {
  const [comments, setComments] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/comment/${ideaId}`);

      const result = await res.json();

      setComments(result);
    };

    fetchData();
  }, [ideaId]);

  const handleComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const commentData = {
      ideaId: ideaId,
      userId: user?.id,
      authorName: user?.name,
      comment: comment,
      createdAt: new Date(),
    };
    console.log(commentData);
    const res = await fetch(`http://localhost:5000/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    const data = await res.json();
    if (data?.insertedId) {
      toast.success("Your comment successfully added!");
      setComments((prev) => [
        {
          ...commentData,
          _id: data.insertedId,
        },
        ...prev,
      ]);

      e.target.reset();
    }
    console.log(data);
  };
  return (
    <div>
      <div className="rounded-3xl border border-border bg-card p-6 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Community Feedback</h2>

          <span className="text-xs text-muted-foreground">
            {comments ? comments.length : "0"} Comments
          </span>
        </div>

        {/* ADD COMMENT BOX */}
        <Form onSubmit={handleComment} className="space-y-3">
          <TextField name="comment" isRequired>
            <Label className="mb-2 text-sm font-medium">Comment</Label>

            <TextArea
              placeholder="Write your comment..."
              className="input-style rounded-xl shadow-sm placeholder:text-muted-foreground border"
            />

            <FieldError />
          </TextField>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-2xl bg-[#4BB8FA] px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Post Comment
            </button>
          </div>
        </Form>

        {/* COMMENTS LIST */}
        <div className="space-y-4">
          {/* COMMENT CARD */}
          {comments.map((comment) => (
            <CommentCard
              key={comment._id}
              comment={comment}
              onDelete={(id) => {
                setComments((prev) => prev.filter((c) => c._id !== id));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
