
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface RouteMapping {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Route mapping - defines labels and parent relationships
  const routes: RouteMapping = {
    'dashboard': { label: 'Dashboard' },
    'strategies': { label: 'AI Strategies' },
    'strategy': { label: 'Strategy Details', parent: 'strategies' },
    'create-strategy': { label: 'Create Strategy', parent: 'strategies' },
    'deploy-strategy': { label: 'Deploy Strategy', parent: 'strategies' },
    'intelligence-agents': { label: 'Intelligence Agents' },
    'agent': { label: 'Agent Details', parent: 'intelligence-agents' },
    'flows': { label: 'Flows' },
    'asset-onboarding': { label: 'Asset Onboarding' },
    'launch-pools': { label: 'Launch Pools' },
    'launch-pool': { label: 'Launch Pool Details', parent: 'launch-pools' },
  };

  // Build breadcrumb items
  const breadcrumbs = [];
  let currentPath = '';

  // Always add home
  breadcrumbs.push({
    path: '/',
    label: 'Home',
    isLast: pathnames.length === 0
  });

  // Add additional breadcrumbs based on the current path
  for (let i = 0; i < pathnames.length; i++) {
    const name = pathnames[i];
    const isId = name.length > 8 && !routes[name]; // Simple heuristic for IDs
    
    // If it's an ID, we want to use the parent element's path
    if (isId && i > 0) {
      const parentPathname = pathnames[i-1];
      const parentInfo = routes[parentPathname];
      
      currentPath += `/${name}`;
      
      breadcrumbs.push({
        path: currentPath,
        label: `${parentInfo?.label?.replace(' Details', '')} ${name}`,
        isLast: i === pathnames.length - 1
      });
    } else {
      currentPath += `/${name}`;
      const routeInfo = routes[name];
      
      breadcrumbs.push({
        path: currentPath,
        label: routeInfo?.label || name,
        isLast: i === pathnames.length - 1
      });
    }
  }

  if (breadcrumbs.length <= 1) {
    return null; // Don't display breadcrumbs on homepage
  }

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            <BreadcrumbItem>
              {breadcrumb.isLast ? (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.path}>
                    {index === 0 ? (
                      <Home className="h-4 w-4" />
                    ) : (
                      breadcrumb.label
                    )}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!breadcrumb.isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
