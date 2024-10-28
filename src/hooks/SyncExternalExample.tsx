import { useSyncExternalStore } from "react";

const subscribe = (listiner: () => void) => {
  window.addEventListener("online", listiner);
  window.addEventListener("offline", listiner);

  return () => {
    window.removeEventListener("online", listiner);
    window.removeEventListener("offline", listiner);
  };
};

export default function SyncExternal({
  getSnapShot,
}: {
  getSnapShot: () => boolean;
}) {
  const isOnline = useSyncExternalStore(subscribe, getSnapShot);
  return <div>{isOnline ? "online" : "offline"}</div>;
}
