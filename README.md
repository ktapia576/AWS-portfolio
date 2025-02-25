# 🚀 AWS Portfolio Website - Next.js & AWS Cloud Services

Welcome to my **AWS Portfolio Website** repository! This project serves as a learning exercise to explore AWS services, particularly **AWS CloudFront**, **Route 53**, and possibly **AWS Lambda**, while using **Next.js** and **React** to build a serverless and scalable portfolio website.

This project follows the **JAMStack architecture**, leveraging static site generation, serverless functions, and a CDN-first approach to ensure fast and efficient performance.

## 📌 Project Goals
- ✅ **Deploy a Next.js Portfolio Website** on AWS
- ✅ **Use AWS CloudFront** for global content delivery (CDN)
- ✅ **Set up a custom domain with AWS Route 53**
- ✅ **Explore serverless options with AWS Lambda**
- ✅ **Use AWS S3 Bucket for static file storage**
- ✅ **Optimize performance and security using AWS services**

---

## 🛠️ Tech Stack
- **Framework:** Next.js
- **Frontend Library:** React
- **Hosting:** AWS CloudFront + S3 (static site hosting)
- **Domain Management:** AWS Route 53
- **Optional Backend (for API calls):** AWS Lambda + API Gateway
- **CI/CD:** GitHub Actions (possible future implementation)

---

## 🚀 Deployment Workflow

### **1️⃣ Set Up Next.js Project**
If you haven't already, create a Next.js project:
```bash
npx create-next-app aws-portfolio
cd aws-portfolio
```

### **2️⃣ Build the Website**
```bash
npm run build  # or pnpm build / yarn build
```

### **3️⃣ Deploying to AWS CloudFront + S3**
1. **Create an S3 Bucket** (for static hosting)
2. **Upload the Next.js build output (`.next/static`)**
3. **Configure CloudFront to serve content from S3**
4. **Enable Route 53 for domain management**

### **4️⃣ (Optional) Use AWS Lambda for Dynamic API Routes**
If using serverless functions, deploy AWS Lambda with API Gateway:
```bash
# Example deployment using AWS SAM
sam deploy --guided
```

---

## 📂 Folder Structure
```
/aws-portfolio
  ├── /pages          # Next.js pages
  ├── /components     # Reusable React components
  ├── /public         # Static assets (images, fonts, etc.)
  ├── /styles         # Global styles (Tailwind or CSS)
  ├── .next/          # Build output (ignored in Git)
```

---

## 🔄 Future Enhancements
- ✅ **Add CI/CD pipeline** with GitHub Actions & AWS CodePipeline
- ✅ **Implement authentication** (Cognito/Auth0)
- ✅ **Enable server-side rendering (SSR) with AWS Lambda**
- ✅ **Optimize caching & performance with CloudFront settings**

---

## 📜 License
This project is open-source under the **MIT License**.

---

🎉 **Thank you for checking out my AWS Portfolio Website!** Feel free to fork, experiment, and contribute! 🚀

