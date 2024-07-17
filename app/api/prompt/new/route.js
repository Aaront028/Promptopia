import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json()

  if (!prompt || !userId || !tag) {
    return res.status(400).json({ error: 'Missing field' })
  }

  try {
    await connectToDB()

    const newPrompt = new Prompt({
      creator: userId,
      tag,
    })

    await newPrompt.save()

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
