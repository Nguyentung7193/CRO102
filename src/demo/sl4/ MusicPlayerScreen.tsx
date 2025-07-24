/* eslint-disable @typescript-eslint/no-unused-vars */
// src/screens/MusicPlayerScreen.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'MusicPlayer'>;

Sound.setCategory('Playback');

const playlist = [
  {
    title: 'SoundHelix Song 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'SoundHelix Song 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'SoundHelix Song 3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const MusicPlayerScreen: React.FC<Props> = ({ navigation }) => {
  const soundRef = useRef<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    loadSound();

    const interval = setInterval(() => {
      if (soundRef.current && isPlaying) {
        soundRef.current.getCurrentTime((seconds) => {
          setPosition(seconds);
        });
      }
    }, 1000);

    return () => {
      unloadSound();
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex]);

  const loadSound = () => {
    unloadSound();

    const sound = new Sound(currentTrack.url, undefined, (error) => {
      if (error) {
        console.log('❌ Load failed', error);
        return;
      }
      setDuration(sound.getDuration());
      setPosition(0);
    });

    soundRef.current = sound;
  };

  const unloadSound = () => {
    if (soundRef.current) {
      soundRef.current.release();
      soundRef.current = null;
    }
  };

  const playPause = () => {
    const sound = soundRef.current;
    if (!sound) return;

    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else {
      sound.play((success) => {
        if (success) {
          console.log('✅ Finished playing');
          handleNext();
        } else {
          console.log('❌ Playback failed');
        }
        setIsPlaying(false);
        setPosition(0);
      });
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handleBack = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Trình phát nhạc</Text>
      <Text style={styles.trackTitle}>{currentTrack.title}</Text>
      <Text style={styles.time}>
        ⏱ {position.toFixed(1)} / {duration.toFixed(1)} giây
      </Text>

      <View style={styles.controls}>
        <TouchableOpacity onPress={handleBack} style={styles.controlBtn}>
          <Text style={styles.btnText}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playPause} style={styles.controlBtn}>
          <Text style={styles.btnText}>
            {isPlaying ? '⏸' : '▶️'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.controlBtn}>
          <Text style={styles.btnText}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  trackTitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    color: '#111827',
  },
  time: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#4b5563',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  controlBtn: {
    backgroundColor: '#3b82f6',
    padding: 14,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
  },
});
