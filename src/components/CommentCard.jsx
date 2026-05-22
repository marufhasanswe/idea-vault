import React from "react";
import CommentEditModal from "./CommentEditModal";
import CommentDeleteAlert from "./CommentDeleteAlert";

const CommentCard = ({ comment, onDelete }) => {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium">{comment?.authorName}</p>
          <p className="text-xs text-muted-foreground">
            {new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
              -Math.floor(
                (new Date() - new Date(comment?.createdAt)) / (1000 * 60 * 60),
              ),
              "hour",
            )}
          </p>
        </div>

        <div className="flex gap-2 text-xs">
          <CommentEditModal onDelete={onDelete} comment={comment} />
          <CommentDeleteAlert onDelete={onDelete} comment={comment} />
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{comment?.comment}</p>
    </div>
  );
};

export default CommentCard;
