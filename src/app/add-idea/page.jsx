"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const AddIdeaPage = () => {
  const { data: session } = authClient.useSession();

  const userId = session?.user?.id;
  const handleAddIdea = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());
    ideaData.userId = userId;

    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify(ideaData),
    });
    const data = await res.json();
    if (data?.insertedId) {
      toast.success("Successfully added your idea!");
    }
    console.log(data);
  };

  return (
    <section className="relative overflow-hidden bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-4 py-1 text-xs text-muted-foreground backdrop-blur">
            🚀 Startup Idea Platform
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Share Your{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Brilliant Idea
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Submit your startup concept, solve real-world problems, and get
            valuable feedback from innovators and creators worldwide.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-3xl p-5 shadow-2xl sm:p-6 md:p-10">
          <form onSubmit={handleAddIdea} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Idea Title */}
              <div className="md:col-span-2">
                <TextField name="ideaTitle" isRequired>
                  <Label className="mb-2 text-sm font-medium">Idea Title</Label>

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
                  name="category"
                  isRequired
                  className="w-full text-muted-foreground"
                  placeholder="Select category"
                >
                  <Label className="mb-2 text-sm font-medium">Category</Label>

                  <Select.Trigger className="input-style h-12 rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Technology" textValue="Technology">
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
              <TextField name="estimatedBudget" type="number">
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
                <TextField name="imageUrl" isRequired>
                  <Label className="mb-2 text-sm font-medium">Image URL</Label>

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
                <TextField name="tags">
                  <Label className="mb-2 text-sm font-medium">Tags</Label>

                  <Input
                    placeholder="AI, Startup, SaaS"
                    className="input-style rounded-2xl h-12 shadow-sm placeholder:text-muted-foreground"
                  />

                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-1">
                <TextField name="targetAudience" isRequired>
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

              <div className="md:col-span-1">
                <TextField name="shortDescription" isRequired>
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

              <div className="md:col-span-1">
                <TextField name="detailedDescription" isRequired>
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

              <div className="md:col-span-2">
                <TextField name="problemStatement" isRequired>
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
                <TextField name="proposedSolution" isRequired>
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
              type="submit"
              className="h-12 w-full rounded-2xl bg-linear-to-r from-[#4BB8FA] to-[#2C5EAD] text-base font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Submit Startup Idea
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddIdeaPage;
