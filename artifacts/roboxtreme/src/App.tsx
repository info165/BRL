import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RoundPush from "@/pages/RoundPush";
import RoundPull from "@/pages/RoundPull";
import RoundWar from "@/pages/RoundWar";
import RobotSpecs from "@/pages/RobotSpecs";
import Rules from "@/pages/Rules";
import Registration from "@/pages/Registration";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/round-push" component={RoundPush} />
      <Route path="/round-pull" component={RoundPull} />
      <Route path="/round-war" component={RoundWar} />
      <Route path="/robot-specs" component={RobotSpecs} />
      <Route path="/rules" component={Rules} />
      <Route path="/registration" component={Registration} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
