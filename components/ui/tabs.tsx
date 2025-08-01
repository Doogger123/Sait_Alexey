import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  return <button className={className}>{children}</button>;
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}