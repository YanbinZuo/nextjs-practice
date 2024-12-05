import AuthForm from "@/components/AuthForm";

export default function Home({searchParams}) {
  const formMode = searchParams.mode || 'login';

  return <AuthForm mode={formMode} />
}
