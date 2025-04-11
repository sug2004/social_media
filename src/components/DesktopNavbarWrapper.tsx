// DesktopNavbarWrapper.tsx
import { currentUser } from "@clerk/nextjs/server";
import DesktopNavbar from "./DesktopNavbar";

async function DesktopNavbarWrapper() {
  const user = await currentUser();
  
  // Serialize only the needed user data
  const serializedUser = user ? {
    id: user.id,
    username: user.username,
    emailAddress: user.emailAddresses[0]?.emailAddress,
  } : null;

  return <DesktopNavbar user={serializedUser} />;
}

export default DesktopNavbarWrapper;
