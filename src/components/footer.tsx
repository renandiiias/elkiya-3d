import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Elkiya 3D Digital World. All Rights Reserved.
        </p>
        <p className="text-sm mt-2 inline-flex items-center gap-1">
          Designed with <Heart className="w-4 h-4 text-destructive fill-current" /> in the Digital Realm.
        </p>
      </div>
    </footer>
  );
}
