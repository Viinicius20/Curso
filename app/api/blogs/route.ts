import Blog from "../../models/blogs"
import { NextResponse } from "next/server"
import { connectDB } from "../../lib/db"

export async function GET(){
    await connectDB()
    const blogs = await Blog.find({})
    return NextResponse.json(blogs)
}

export async function POST(request: Request) {
    await connectDB()
    const body = await request.json()
    const blog = new Blog(body)
    const saved = await blog.save()
    return NextResponse.json(saved, { status: 201})
}