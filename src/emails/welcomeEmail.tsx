import { Button, Text, Heading, Hr } from "@react-email/components";
import BaseEmail from "./baseEmail";

interface WelcomeEmailProps {
  name?: string;
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  const displayName = name?.trim() || "there";

  return (
    <BaseEmail>

      <Heading style={{ fontSize: "22px", color: "#111", margin: "0 0 8px" }}>
        Hey {displayName} 👋
      </Heading>

      <Text style={{ color: "#555", fontSize: "15px", lineHeight: "1.6" }}>
        Just wanted to let you know your account is all set up and ready to go.
        Nothing fancy, just log in and start poking around!
      </Text>

      <Button
        href="https://example.com/dashboard"
        style={{ backgroundColor: "#4f46e5", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "15px", display: "inline-block", marginTop: "8px" }}
      >
        Go to dashboard
      </Button>

      <Hr style={{ margin: "32px 0", borderColor: "#eee" }} />

      <Text style={{ color: "#aaa", fontSize: "13px" }}>
        Questions? Don&apos;t reply to this email — we don&apos;t care.
      </Text>

    </BaseEmail>
  );
}