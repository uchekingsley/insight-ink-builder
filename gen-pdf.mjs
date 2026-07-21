import fs from 'fs';
import { generatePortfolioPdf } from './src/lib/pdf-portfolio.tsx';
const blob = await generatePortfolioPdf();
const ab = await blob.arrayBuffer();
fs.writeFileSync('/mnt/documents/Miracle_Awotide_Marketing_Portfolio.pdf', Buffer.from(ab));
console.log('ok', ab.byteLength);
