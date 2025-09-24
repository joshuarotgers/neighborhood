import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../constants/design';
import { User } from '../../types';

interface AvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg';
  showOnlineStatus?: boolean;
  testID?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  user,
  size = 'md',
  showOnlineStatus = false,
  testID,
}) => {
  const sizeStyles = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  };

  const textSizeStyles = {
    sm: fontSize.sm,
    md: fontSize.md,
    lg: fontSize.lg,
  };

  return (
    <View style={[styles.container, sizeStyles[size]]} testID={testID}>
      {user.avatar ? (
        <Image source={{ uri: user.avatar }} style={[styles.image, sizeStyles[size]]} />
      ) : (
        <View style={[styles.placeholder, sizeStyles[size]]}>
          <Text style={[styles.placeholderText, { fontSize: textSizeStyles[size] }]}>
            {user.name.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}
      {showOnlineStatus && user.isOnline && (
        <View style={[styles.onlineIndicator, sizeStyles[size]]} />
      )}
    </View>
  );
};

interface UserCardProps {
  user: User;
  showRating?: boolean;
  showStats?: boolean;
  onPress?: () => void;
  testID?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  showRating = true,
  showStats = false,
  onPress,
  testID,
}) => (
  <View style={styles.userCard} testID={testID}>
    <Avatar user={user} size="md" showOnlineStatus testID={`${testID}-avatar`} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{user.name}</Text>
      {showRating && (
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {user.rating}</Text>
          <Text style={styles.rideCount}>({user.totalRides} rides)</Text>
        </View>
      )}
      {showStats && (
        <View style={styles.statsContainer}>
          <Text style={styles.statText}>Saved: ${user.totalSaved}</Text>
          <Text style={styles.statText}>CO₂: {user.co2Saved}kg</Text>
        </View>
      )}
    </View>
  </View>
);

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  testID?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  testID,
}) => {
  const badgeStyle = [
    styles.badge,
    styles[variant],
    styles[size],
  ];

  const textStyle = [
    styles.badgeText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
  ];

  return (
    <View style={badgeStyle} testID={testID}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

interface AchievementBadgeProps {
  achievement: {
    id: string;
    name: string;
    description: string;
    icon: string;
    isUnlocked: boolean;
    progress: number;
    maxProgress: number;
  };
  testID?: string;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  testID,
}) => (
  <View style={[
    styles.achievementBadge,
    achievement.isUnlocked ? styles.unlocked : styles.locked
  ]} testID={testID}>
    <Text style={styles.achievementIcon}>{achievement.icon}</Text>
    <View style={styles.achievementInfo}>
      <Text style={[
        styles.achievementName,
        achievement.isUnlocked ? styles.unlockedText : styles.lockedText
      ]}>
        {achievement.name}
      </Text>
      <Text style={styles.achievementDescription}>{achievement.description}</Text>
      {!achievement.isUnlocked && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${(achievement.progress / achievement.maxProgress) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {achievement.progress}/{achievement.maxProgress}
          </Text>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  // Avatar styles
  container: {
    position: 'relative',
  },
  image: {
    borderRadius: borderRadius.full,
  },
  placeholder: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: colors.white,
    fontWeight: fontWeight.semibold,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: colors.white,
  },

  // User card styles
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  userName: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginRight: spacing.sm,
  },
  rideCount: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  statText: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    marginRight: spacing.md,
  },

  // Badge styles
  badge: {
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    alignSelf: 'flex-start',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.accent,
  },
  success: {
    backgroundColor: colors.success,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  error: {
    backgroundColor: colors.error,
  },
  sm: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  md: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    fontWeight: fontWeight.medium,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.white,
  },
  successText: {
    color: colors.white,
  },
  warningText: {
    color: colors.dark,
  },
  errorText: {
    color: colors.white,
  },
  smText: {
    fontSize: fontSize.xs,
  },
  mdText: {
    fontSize: fontSize.sm,
  },

  // Achievement badge styles
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  unlocked: {
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  locked: {
    borderLeftWidth: 4,
    borderLeftColor: colors.border,
    opacity: 0.7,
  },
  achievementIcon: {
    fontSize: fontSize.xl,
    marginRight: spacing.md,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    marginBottom: spacing.xs,
  },
  unlockedText: {
    color: colors.text,
  },
  lockedText: {
    color: colors.textSecondary,
  },
  achievementDescription: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
  },
  progressText: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    fontWeight: fontWeight.medium,
  },
});
