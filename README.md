# Ylytix - AI Report Analyzer

A Next.js application that uses OpenAI to analyze report data and provide interactive insights through conversational AI.

## Features

- **Smart Report Analysis**: Upload any report data and get AI-powered initial analysis
- **Interactive Chat**: Engage in conversations with AI to explore deeper insights
- **Intelligent Questions**: AI generates relevant follow-up questions based on your data
- **Actionable Insights**: Get specific recommendations and next steps
- **Modern UI**: Clean, responsive interface with dark mode support

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure OpenAI API**
   - Copy `.env.local.example` to `.env.local`
   - Add your OpenAI API key:
   ```bash
   cp .env.local.example .env.local
   ```
   - Edit `.env.local` and add your API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Click "Launch Tool" to start analyzing reports

## How to Use

1. **Submit Report Data**
   - Navigate to the tool page (`/tool`)
   - Paste your report data in the text area
   - Click "Start Analysis"

2. **Engage with AI**
   - AI will analyze your data and ask initial questions
   - Respond to the questions to dive deeper
   - Continue the conversation to uncover insights

3. **Get Actionable Results**
   - AI provides specific recommendations
   - Explore different aspects of your data
   - Ask follow-up questions for clarification

## Example Report Data

You can test the tool with various types of data:

- **Sales Reports**: Revenue figures, conversion rates, customer metrics
- **Marketing Data**: Campaign performance, engagement rates, ROI
- **Financial Reports**: Budget vs actual, expense breakdowns, profit margins
- **Operations Data**: Performance metrics, efficiency indicators, KPIs
- **Survey Results**: Customer feedback, satisfaction scores, trends

## API Endpoints

- `POST /api/analyze-report` - Initial report analysis
- `POST /api/chat` - Interactive chat with AI

## Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **AI**: OpenAI GPT-4
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with dark mode support

## Development

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI SDK
- **State Management**: React hooks

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `NEXT_PUBLIC_APP_URL` - Application URL for client-side usage

## Getting OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Add billing information (required for API usage)
5. Copy the key to your `.env.local` file

## Troubleshooting

- **API Key Issues**: Ensure your OpenAI API key is valid and has billing enabled
- **Network Errors**: Check your internet connection and API key configuration
- **Build Errors**: Run `npm install` to ensure all dependencies are installed

## Contributing

Feel free to submit issues and enhancement requests!
