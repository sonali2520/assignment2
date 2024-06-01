import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  end_year: String,
  title: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  likelihood: String,
});

const Data = mongoose.model('data', dataSchema);

export default Data;