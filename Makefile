.PHONY: dev build deploy preview

# Default target
all: dev

# Run the development server
dev:
	npm run dev

# Build the project
build:
	npm run build

# Deploy to GitHub Pages
deploy:
	npm run deploy

# Preview the production build
preview:
	npm run preview
