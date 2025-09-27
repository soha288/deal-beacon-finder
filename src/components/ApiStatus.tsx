import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export const ApiStatus = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'offline'>('checking');
  
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/scrape?product=test', {
          method: 'GET',
          signal: AbortSignal.timeout(3000) // 3 second timeout
        });
        setStatus(response.ok ? 'connected' : 'offline');
      } catch {
        setStatus('offline');
      }
    };
    
    checkApiStatus();
  }, []);
  
  if (status === 'checking') {
    return (
      <Alert className="mb-4">
        <Clock className="h-4 w-4" />
        <AlertDescription>
          Checking connection to scraping service...
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <Badge variant={status === 'connected' ? 'default' : 'secondary'} className="flex items-center gap-1">
        {status === 'connected' ? (
          <>
            <CheckCircle className="h-3 w-3" />
            Live scraping enabled
          </>
        ) : (
          <>
            <XCircle className="h-3 w-3" />
            Using demo data
          </>
        )}
      </Badge>
      {status === 'offline' && (
        <p className="text-sm text-muted-foreground">
          Start your Python backend to get real-time Amazon & Flipkart data
        </p>
      )}
    </div>
  );
};