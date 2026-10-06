import { next } from "@vercel/functions";

export const config = {
  matcher: ["/", "/download", "/download/"],
};

export default function middleware(request) {
  const country = request.headers.get("x-vercel-ip-country") || "";
  if (!/^[A-Za-z]{2}$/.test(country)) return next();
  return next({
    headers: {
      "set-cookie": `oh_cc=${country.toUpperCase()}; Path=/; Max-Age=86400; SameSite=Lax`,
    },
  });
}
