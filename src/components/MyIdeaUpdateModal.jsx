"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
const MyIdeaUpdateModal = ({ idea }) => {
  const id = idea._id;

  const handleUpdateIdea = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/my-ideas/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    if (data?.modifiedCount > 0) {
      toast.success("Successfully idea data updated!");
      redirect("/my-ideas");
    }
  };
  return (
    <Modal>
      <Button className="rounded-xl border text-foreground border-border bg-background px-4 py-1.5 text-sm hover:bg-muted">
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Idea</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdateIdea} className="space-y-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {/* Idea Title */}
                    <div className="md:col-span-2">
                      <TextField
                        name="ideaTitle"
                        defaultValue={idea?.ideaTitle}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Idea Title
                        </Label>

                        <Input
                          placeholder="AI Powered Learning Platform"
                          className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Category */}
                    <div>
                      <Select
                        defaultValue={idea?.category}
                        name="category"
                        isRequired
                        className="w-full text-muted-foreground"
                        placeholder="Select category"
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Category
                        </Label>

                        <Select.Trigger className="input-style h-12 rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                              id="Technology"
                              textValue="Technology"
                            >
                              Technology
                            </ListBox.Item>
                            <ListBox.Item id="AI" textValue="AI">
                              AI
                            </ListBox.Item>
                            <ListBox.Item id="Health" textValue="Health">
                              Health
                            </ListBox.Item>
                            <ListBox.Item id="Education" textValue="Education">
                              Education
                            </ListBox.Item>
                            <ListBox.Item id="FinTech" textValue="FinTech">
                              FinTech
                            </ListBox.Item>
                            <ListBox.Item id="SaaS" textValue="SaaS">
                              SaaS
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Estimated Budget */}
                    <TextField
                      name="estimatedBudget"
                      defaultValue={idea?.estimatedBudget}
                      type="number"
                    >
                      <Label className="mb-2 text-sm font-medium">
                        Estimated Budget
                      </Label>

                      <Input
                        type="number"
                        placeholder="5000"
                        className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                      />

                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        defaultValue={idea?.imageUrl}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Image URL
                        </Label>

                        <Input
                          type="url"
                          placeholder="Enter image url"
                          className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Tags */}
                    <div className="md:col-span-1">
                      <TextField name="tags" defaultValue={idea?.tags}>
                        <Label className="mb-2 text-sm font-medium">Tags</Label>

                        <Input
                          placeholder="AI, Startup, SaaS"
                          className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Target Audience */}
                    <div className="md:col-span-1">
                      <TextField
                        name="targetAudience"
                        defaultValue={idea?.targetAudience}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Target Audience
                        </Label>

                        <Input
                          placeholder="Students, Developers, Entrepreneurs"
                          className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="shortDescription"
                        defaultValue={idea?.shortDescription}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Short Description
                        </Label>

                        <TextArea
                          placeholder="Write a short overview about your startup idea..."
                          className="input-style rounded-2xl shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Detailed Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="detailedDescription"
                        defaultValue={idea?.detailedDescription}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium ">
                          Detailed Description
                        </Label>

                        <TextArea
                          placeholder="Explain your startup idea in detail..."
                          className="input-style rounded-2xl shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Problem Statement */}
                    <div className="md:col-span-2">
                      <TextField
                        name="problemStatement"
                        defaultValue={idea?.problemStatement}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Problem Statement
                        </Label>

                        <TextArea
                          placeholder="What problem does your startup solve?"
                          className="input-style rounded-2xl shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Proposed Solution */}
                    <div className="md:col-span-2">
                      <TextField
                        name="proposedSolution"
                        defaultValue={idea?.proposedSolution}
                        isRequired
                      >
                        <Label className="mb-2 text-sm font-medium">
                          Proposed Solution
                        </Label>

                        <TextArea
                          placeholder="Describe your proposed solution..."
                          className="input-style rounded-2xl shadow-sm placeholder:text-muted-foreground"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    slot={"close"}
                    type="submit"
                    className="h-12 w-full rounded-2xl bg-linear-to-r from-[#4BB8FA] to-[#2C5EAD] text-base font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Update Idea
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default MyIdeaUpdateModal;
