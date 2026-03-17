import { Text, Heading, Hr } from "@react-email/components";
import BaseEmail from "./baseEmail";

interface CustomEmailProps {
  name?: string;
  message?: string;
}

export default function CustomEmail({ name, message }: CustomEmailProps) {
  const displayName = name?.trim() || "there";
  const displayMessage = message?.trim() || "Custom message here!";

  return (
    
    <BaseEmail>

      <Heading style={{ fontSize: "22px", color: "#111", margin: "0 0 8px" }}>
        Hey {displayName} 👋
      </Heading>

      <Text style={{ color: "#555", fontSize: "15px", lineHeight: "1.6" }}>
        {displayMessage}
      </Text>

      <Hr style={{ margin: "32px 0", borderColor: "#eee" }} />

      <Text style={{ color: "#aaa", fontSize: "13px" }}>
        Questions? Don&apos;t reply to this email — we don&apos;t care.
      </Text>

    </BaseEmail>
  );
}