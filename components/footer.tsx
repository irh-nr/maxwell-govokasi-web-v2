import { Linkedin, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-2 mb-4 max-h-8">
                <Image
                  src={"/brand-logo/maxwell-white.png"}
                  alt="Maxwell Logo"
                  height={100}
                  width={100}
                  className="pb-1"
                />
                <span className="text-muted-foreground mx-1 pointer-events-none">
                  ×
                </span>
                <Image
                  src={"/brand-logo/GV-white.png"}
                  alt="GOVOKASi Logo"
                  height={100}
                  width={100}
                  className="pt-2"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm max-w-56">
              Connecting young talent with top corporate opportunities
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#coaches"
                  className="hover:text-white transition-colors"
                >
                  Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="#cta"
                  className="hover:text-white transition-colors"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-white/70 text-sm hover:text-white transition-colors">
                <Link href={"mailto:"}>contact@maxwell-govokasi.com</Link>
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/govokasi-indonesia/?originalSubdomain=id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/govokasi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="https://www.youtube.com/@govokasiindonesia3214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Youtube size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="hidden">
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm border-t border-white/10 pt-8">
          <p>&copy; 2025 Maxwell x Govokasi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
