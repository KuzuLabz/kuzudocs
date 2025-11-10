import { AppWindow, Building2, Gamepad2, Library } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import Link, { type LinkProps } from "next/link";
import { ReactNode } from "react";

type SectionType = {
  name: string;
  description: string;
  icon: ReactNode;
  href: string;
};

const packageSections: SectionType[] = [
  {
    name: "React Native",
    description: "NPM packages for React Native",
    icon: <FontAwesomeIcon icon={faReact} className="size-full" />,
    href: "/docs/react-native",
  },
  {
    name: "Python",
    description: "PIP packages",
    icon: <FontAwesomeIcon icon={faPython} className="size-full" />,
    href: "/docs/python",
  },
];

const softwareSections: SectionType[] = [
  {
    name: "Apps",
    description: "Mobile apps and software",
    icon: <AppWindow className="size-full" />,
    href: "/docs/apps",
  },
  {
    name: "Games",
    description: "Small game demos",
    icon: <Gamepad2 className="size-full" />,
    href: "/docs/games",
  },
];

export default function DocsPage() {
  return (
    <main className="container flex flex-col flex-1 justify-center items-center py-16 text-center z-2">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
        Developer Packages
      </h1>
      <p className="text-fd-muted-foreground">
        Portal to different sections of docs.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 text-start md:grid-cols-2">
        {packageSections.map((item) => (
          <Item key={item.name} href={item.href}>
            <Icon>{item.icon}</Icon>
            <h2 className="mb-2 font-medium">{item.name}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {item.description}
            </p>
          </Item>
        ))}
      </div>
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl pt-6">Software</h1>
      <p className="text-fd-muted-foreground">
        Portal to different sections of docs.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 text-start md:grid-cols-2">
        {softwareSections.map((item) => (
          <Item key={item.name} href={item.href}>
            <Icon>{item.icon}</Icon>
            <h2 className="mb-2 font-medium">{item.name}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {item.description}
            </p>
          </Item>
        ))}
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 size-8 rounded-lg border p-1 text-fd-muted-foreground bg-fd-muted shadow-md">
      {children}
    </div>
  );
}

function Item(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link {...props} className="bg-fd-card rounded-2xl border p-4 shadow-lg">
      {props.children}
    </Link>
  );
}
