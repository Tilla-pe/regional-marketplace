import { mockZipCodes } from '../data/mockZipCodes';
import { ZipCodeEntry } from '../types';

export const findZipCode = (zipCode: string): ZipCodeEntry | undefined => mockZipCodes.find((entry) => entry.zipCode === zipCode.trim());

export const haversineDistanceKm = (from: ZipCodeEntry, to: ZipCodeEntry): number => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(to.lat - from.lat);
  const dLon = toRad(to.lon - from.lon);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);
  const a = Math.sin(dLat / 2) ** 2 + Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return Math.round(earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
};

export const distanceBetweenZipCodes = (originZip: string, targetZip?: string): number | undefined => {
  if (!targetZip) return undefined;
  const origin = findZipCode(originZip);
  const target = findZipCode(targetZip);
  if (!origin || !target) return undefined;
  return haversineDistanceKm(origin, target);
};
