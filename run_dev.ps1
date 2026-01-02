Write-Host "Starting development server..."
Write-Host "Note: Running with mock DATABASE_URL. API endpoints needing a real database will fail."
$env:DATABASE_URL = "postgres://mock:mock@localhost:5432/mock"
$env:NODE_ENV = "development"
npx tsx server/index-dev.ts
