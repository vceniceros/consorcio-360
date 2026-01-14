export type ServiceStatus = 'OK' | 'WARNING' | 'ERROR';

export interface ServiceStatusItem {
  id: string;
  name: string;
  lastRevision: string;
  status: ServiceStatus;
}
