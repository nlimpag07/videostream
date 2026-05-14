
## 7. Scraping anime & episodes
With the dev server running (`npm run dev`), trigger the scraper via:

```powershell
curl -X POST http://localhost:3000/api/scrape
```
Use Postman, Thunder Client, or similar:
	- Method: `POST`
	- URL: `http://localhost:3000/api/scrape`

Scraping can take a little while depending on how many feed entries and episode links there are.
> **Note:** If `curl` returns `Connection refused` or a similar network error, it usually means the dev server isn't running. Make sure `npm run dev` is active in another terminal before calling `/api/scrape`.


Command run: curl.exe -X POST http://localhost:3000/api/scrape
In one terminal:
In another PowerShell terminal, trigger scrape with one of:
If you get any error back from the request (e.g. 500 status, JSON error), paste the response body and I’ll help debug the scraper itself