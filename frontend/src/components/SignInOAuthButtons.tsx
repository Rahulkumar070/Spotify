import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const providers = [
  {
    name: "Google",
    icon: "/google.png",
    strategy: "oauth_google",
  },
  // Add more providers here in the future
];

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) return null;

  const handleOAuthSignIn = (strategy) => {
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  return (
    <div className="space-y-2">
      {providers.map(({ name, icon, strategy }) => (
        <Button
          key={strategy}
          onClick={() => handleOAuthSignIn(strategy)}
          variant="secondary"
          className="w-full text-white border-zinc-200 h-11 flex items-center gap-3"
        >
          <img src={icon} alt={`${name} logo`} className="size-5" />
          Continue with {name}
        </Button>
      ))}
    </div>
  );
};

export default SignInOAuthButtons;
