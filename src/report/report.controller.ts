import { Controller, Get, Header, Res } from '@nestjs/common';
import { Response } from 'express';
import { resolve } from 'path';
import puppeteer from 'puppeteer';
import * as fs from 'fs';

const reportContent = fs.readFileSync(
  resolve(__dirname, './../../src/report/templates/custom-report.html'),
  'utf-8',
);

@Controller('report')
export class ReportController {
  @Get('/download')
  @Header('Content-Type', 'application/pdf')
  async downloadReport(@Res() res: Response): Promise<void> {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--font-render-hinting=none',
          '--force-color-profile=srgb',
        ],
      });

      const page = await browser.newPage();
      await page.setContent(reportContent, { waitUntil: 'networkidle0' });
      await page.emulateMediaType('print');
      await page.setUserAgent(
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      );

      await page.setViewport({
        width: 794,
        height: 1122,
        deviceScaleFactor: 2,
      });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        landscape: true,
        margin: {
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
        },
      });

      await browser.close();

      res.end(pdfBuffer);
    } catch (error) {
      console.error(error);
    }
  }
}
