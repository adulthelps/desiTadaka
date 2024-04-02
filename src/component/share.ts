const url = "https://hotcollection.vercel.app/";
export const handleClick = async () => {
  try {
    if (navigator.share) {
      await navigator.share({ url: url });
      console.log("Shared successfully");
    } else {
      throw new Error("Web Share API not supported");
    }
  } catch (error: any) {
    console.error("Error sharing:", error.message);
    alert(`Share this link: ${url}`);
  }
};