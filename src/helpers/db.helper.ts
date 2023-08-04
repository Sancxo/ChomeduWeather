import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

async function savePrediction(prediction: string, timePeriod: string) {
  try {
    const entity = {
      time_period: timePeriod,
      predicted_value: prediction
    }

    const resp = await supabase.from('predictions').upsert(entity, { onConflict: "time_period" });
    console.debug("Supabase Resp :::", resp)
    const { data, error } = resp;

    if (error) throw error
    else if (data) console.info(`Prediction ${prediction} registered in DB for ${timePeriod} with id ${data}`)
  } catch (error) {
    console.error(error);
  }
}

async function saveGroundTruth(timePeriod: string, value: string) {
  try {
    const entity = {
      time_period: timePeriod,
      ground_truth: value
    }
    const { data, error } = await supabase.from('predictions').upsert(entity, { onConflict: "time_period" });

    if (error) throw error;
    else if (data) console.info(`Ground truth for ${timePeriod} has been set with value ${value}`);
  } catch (error) {

  }
}

async function getAllPredictions() {
  try {
    const { data, error } = await supabase.from('predictions').select("*").order("time_period", { ascending: false });

    if (error) throw error;
    else return data;
  } catch (error) {
    console.error(error);
  }
}

export { savePrediction, getAllPredictions, saveGroundTruth };